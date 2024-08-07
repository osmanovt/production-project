declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpe';
declare module '*.jpeg';

declare module '*.svg' {
    // eslint-disable-next-line no-undef
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
