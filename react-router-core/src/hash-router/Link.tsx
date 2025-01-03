interface LinkProps {
    to: string;
    children: React.ReactNode;
}
const Link: React.FC<LinkProps> = ({ to, children }) => {
    return <a href={"#" + to}>{children}</a>;
};

export default Link;
