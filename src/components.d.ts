/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  EventEmitter,
} from '@stencil/core';
import {
  IOnPageChange,
} from './components/table-pagination/IOnPageChange';
import {
  IOnSortChange,
} from './components/th/IOnSortChange';


export namespace Components {

  interface SmbTablePagination {
    /**
    * Tells if next page button should be active
    */
    'activeNext': boolean;
    /**
    * Tells if previous page button should be active
    */
    'activePrevious': boolean;
    /**
    * Label for next button
    */
    'labelNext': string;
    /**
    * Label for previous button
    */
    'labelPrevious': string;
  }
  interface SmbTablePaginationAttributes extends StencilHTMLAttributes {
    /**
    * Tells if next page button should be active
    */
    'activeNext'?: boolean;
    /**
    * Tells if previous page button should be active
    */
    'activePrevious'?: boolean;
    /**
    * Label for next button
    */
    'labelNext'?: string;
    /**
    * Label for previous button
    */
    'labelPrevious'?: string;
    /**
    * Emitted when clicked on previous or next page button
    */
    'onOnPageChange'?: (event: CustomEvent<IOnPageChange>) => void;
  }

  interface SmbTable {}
  interface SmbTableAttributes extends StencilHTMLAttributes {}

  interface SmbTbody {
    /**
    * Tells if to show loader
    */
    'loading': boolean;
    /**
    * Tells if to show no results overlay
    */
    'noResults': boolean;
    /**
    * Height for no results overlay
    */
    'overlayHeight': number;
  }
  interface SmbTbodyAttributes extends StencilHTMLAttributes {
    /**
    * Tells if to show loader
    */
    'loading'?: boolean;
    /**
    * Tells if to show no results overlay
    */
    'noResults'?: boolean;
    /**
    * Height for no results overlay
    */
    'overlayHeight'?: number;
  }

  interface SmbTd {
    /**
    * Tells if to add default spacing of cell
    */
    'noSpacing': boolean;
    /**
    * Tells if to shrink to child's width
    */
    'shrink': boolean;
    /**
    * Tells if to add ellipsis if the content does not fit the container
    */
    'truncate': boolean;
  }
  interface SmbTdAttributes extends StencilHTMLAttributes {
    /**
    * Tells if to add default spacing of cell
    */
    'noSpacing'?: boolean;
    /**
    * Tells if to shrink to child's width
    */
    'shrink'?: boolean;
    /**
    * Tells if to add ellipsis if the content does not fit the container
    */
    'truncate'?: boolean;
  }

  interface SmbTh {
    /**
    * Cell unique key. Required if `sort` is used
    */
    'key': number;
    /**
    * Tells if to add default spacing of cell
    */
    'noSpacing': boolean;
    /**
    * Tells if to shrink to child's width
    */
    'shrink': boolean;
    /**
    * Sort type. Leave empty to disable sort
    */
    'sort': 'none' | 'asc' | 'desc' | '';
    /**
    * Tells if to add ellipsis if the content does not fit the container
    */
    'truncate': boolean;
  }
  interface SmbThAttributes extends StencilHTMLAttributes {
    /**
    * Cell unique key. Required if `sort` is used
    */
    'key': number;
    /**
    * Tells if to add default spacing of cell
    */
    'noSpacing'?: boolean;
    /**
    * Emitted when sorting changes
    */
    'onOnSortChange'?: (event: CustomEvent<IOnSortChange>) => void;
    /**
    * Tells if to shrink to child's width
    */
    'shrink'?: boolean;
    /**
    * Sort type. Leave empty to disable sort
    */
    'sort'?: 'none' | 'asc' | 'desc' | '';
    /**
    * Tells if to add ellipsis if the content does not fit the container
    */
    'truncate'?: boolean;
  }

  interface SmbThead {}
  interface SmbTheadAttributes extends StencilHTMLAttributes {}

  interface SmbTr {}
  interface SmbTrAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SmbTablePagination': Components.SmbTablePagination;
    'SmbTable': Components.SmbTable;
    'SmbTbody': Components.SmbTbody;
    'SmbTd': Components.SmbTd;
    'SmbTh': Components.SmbTh;
    'SmbThead': Components.SmbThead;
    'SmbTr': Components.SmbTr;
  }

  interface StencilIntrinsicElements {
    'smb-table-pagination': Components.SmbTablePaginationAttributes;
    'smb-table': Components.SmbTableAttributes;
    'smb-tbody': Components.SmbTbodyAttributes;
    'smb-td': Components.SmbTdAttributes;
    'smb-th': Components.SmbThAttributes;
    'smb-thead': Components.SmbTheadAttributes;
    'smb-tr': Components.SmbTrAttributes;
  }


  interface HTMLSmbTablePaginationElement extends Components.SmbTablePagination, HTMLStencilElement {}
  var HTMLSmbTablePaginationElement: {
    prototype: HTMLSmbTablePaginationElement;
    new (): HTMLSmbTablePaginationElement;
  };

  interface HTMLSmbTableElement extends Components.SmbTable, HTMLStencilElement {}
  var HTMLSmbTableElement: {
    prototype: HTMLSmbTableElement;
    new (): HTMLSmbTableElement;
  };

  interface HTMLSmbTbodyElement extends Components.SmbTbody, HTMLStencilElement {}
  var HTMLSmbTbodyElement: {
    prototype: HTMLSmbTbodyElement;
    new (): HTMLSmbTbodyElement;
  };

  interface HTMLSmbTdElement extends Components.SmbTd, HTMLStencilElement {}
  var HTMLSmbTdElement: {
    prototype: HTMLSmbTdElement;
    new (): HTMLSmbTdElement;
  };

  interface HTMLSmbThElement extends Components.SmbTh, HTMLStencilElement {}
  var HTMLSmbThElement: {
    prototype: HTMLSmbThElement;
    new (): HTMLSmbThElement;
  };

  interface HTMLSmbTheadElement extends Components.SmbThead, HTMLStencilElement {}
  var HTMLSmbTheadElement: {
    prototype: HTMLSmbTheadElement;
    new (): HTMLSmbTheadElement;
  };

  interface HTMLSmbTrElement extends Components.SmbTr, HTMLStencilElement {}
  var HTMLSmbTrElement: {
    prototype: HTMLSmbTrElement;
    new (): HTMLSmbTrElement;
  };

  interface HTMLElementTagNameMap {
    'smb-table-pagination': HTMLSmbTablePaginationElement
    'smb-table': HTMLSmbTableElement
    'smb-tbody': HTMLSmbTbodyElement
    'smb-td': HTMLSmbTdElement
    'smb-th': HTMLSmbThElement
    'smb-thead': HTMLSmbTheadElement
    'smb-tr': HTMLSmbTrElement
  }

  interface ElementTagNameMap {
    'smb-table-pagination': HTMLSmbTablePaginationElement;
    'smb-table': HTMLSmbTableElement;
    'smb-tbody': HTMLSmbTbodyElement;
    'smb-td': HTMLSmbTdElement;
    'smb-th': HTMLSmbThElement;
    'smb-thead': HTMLSmbTheadElement;
    'smb-tr': HTMLSmbTrElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
