import React from 'react';

interface State {
    apen: boolean;
    valgteKnapper: string[];
}

export interface AppContext {
    apen: boolean;
    valgteKnapper: string[];
    toggleApen(): void;
    toggleKnapp(id: string): void;
}

export interface AppContextProp {
    context: AppContext;
}

export const AppContext = React.createContext<AppContext>({
    apen: false,
    toggleApen: () => {}, // tslint:disable-line
    toggleKnapp: () => {}, // tslint:disable-line
    valgteKnapper: [],
});

class AppProvider extends React.Component<{}, State> {
    public state: State = {
        apen: false,
        valgteKnapper: [],
    };

    constructor(props: {}) {
        super(props);

        this.toggleKnapp = this.toggleKnapp.bind(this);
        this.toggleApen = this.toggleApen.bind(this);
    }

    public toggleKnapp(id: string) {
        if (this.state.valgteKnapper.includes(id)) {
            const nyeValgte = this.state.valgteKnapper
                .filter((valgt) => valgt !== id);
            this.setState({ valgteKnapper: nyeValgte});
        } else {
            this.setState({ valgteKnapper: [ ...this.state.valgteKnapper, id ]});
        }
        return id;
    }

    public toggleApen() {
        this.setState({ apen: !this.state.apen });
    }

    public render() {
        const context: AppContext = {
            ...this.state,
            toggleApen: this.toggleApen,
            toggleKnapp: this.toggleKnapp
        };

        return (
            <AppContext.Provider value={context}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export function withAppContext<PROPS>(context: React.Context<AppContext>, component: React.ComponentType<AppContextProp & PROPS>): React.ComponentType<PROPS> {
    const Context = context;
    const Component = component;
    return (props: PROPS) => {
        return (
            <Context.Consumer>
                {(contextValue: AppContext) => (
                    <Component {...props} context={contextValue} />
                )}
            </Context.Consumer>
        );
    };
}

export default AppProvider;
