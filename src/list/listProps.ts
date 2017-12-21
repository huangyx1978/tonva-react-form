export type StaticRow = string|JSX.Element|((items:any)=>string|JSX.Element);

export interface ListProps {
    className?: string|string[];
    items: any[];
    item: {
        className?: string|string[];
        contentClass?: string|string[];
        render: (item:any, index:number) => JSX.Element;
        onSelect?: (item:any, isSelected:boolean, anySelected:boolean)=>void;
        onClick?: (item:any)=>void;
    };
    header?: StaticRow;
    footer?: StaticRow;
    loading?: StaticRow;
    none?: StaticRow;
}
