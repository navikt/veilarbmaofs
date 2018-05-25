import * as React from 'react';

// tslint:disable
type JSONValue = string | number | boolean | JSONObject | JSONArray;
type JSONObject = { [member: string]: JSONValue };
interface JSONArray extends Array<JSONValue> {}
// tslint:enable

type Feilmelding = string & { __TYPE__: 'Feilmelding' }; // Slik at den ikke matcher JSONValue
export type Data = JSONValue | Feilmelding;

interface IProps {
    url: string[];
    children: (data: Data[]) => React.ReactNode;
}

interface IState {
    error: boolean;
    data: Data[];
};

function fetchJson(url: string): Promise<Data> {
    return fetch(url, { credentials: 'include'})
        .then((resp) => {
            if (!resp.ok) {
                return resp.statusText as Feilmelding;
            }
            return resp.json() as Promise<JSONValue>;
        }, (error) => {
            return error as Feilmelding;
        })
        .catch((error) => {
            return error as Feilmelding;
        });
}

function settled(promises: Array<Promise<Data>>): Promise<Data[]> {
    return new Promise((resolve) => {
        let unresolvedPromises = promises.length;
        const promiseValues = new Array(promises.length);

        promises.forEach((promise, index) => {
            promise.then((data) => {
                promiseValues[index] = data;
                unresolvedPromises--;

                if (unresolvedPromises === 0) {
                    resolve(promiseValues);
                }

                return data;
            });
        });
    });
}

class Datafetcher extends React.Component<IProps, IState> {
    public state: IState = { data: [], error: false };

    public componentDidMount() {
        const promises: Array<Promise<JSONValue | Feilmelding>> = this.props.url.map((url) => fetchJson(url));
        settled(promises)
            .then((data: Data[]) => {
                this.setState({ data });
            });
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ error: true });
    }


    public render() {
        if (this.state.error) {
            return <p>Alvorlig feil... </p>
        }
        return this.props.children(this.state.data);
    }
}


export default Datafetcher;