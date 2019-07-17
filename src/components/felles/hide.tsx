interface HideProps {
    if?: boolean;
    children?: any;
}

const Hide = (props: HideProps) => props.if ? null : props.children;

export default Hide;
