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
    * Text for total results found
    */
    'foundText': string;
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
    * Text for total results found
    */
    'foundText': string;
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

  interface SmbTable {
    /**
    * Amount of rows are shown in table body
    */
    'bodyRowCount': number;
    /**
    * Body row height
    */
    'bodyRowHeight': number;
    /**
    * Tells if table is loading
    */
    'loading': boolean;
    /**
    * Tells if to show no results overlay
    */
    'noResults': boolean;
  }
  interface SmbTableAttributes extends StencilHTMLAttributes {
    /**
    * Amount of rows are shown in table body
    */
    'bodyRowCount'?: number;
    /**
    * Body row height
    */
    'bodyRowHeight'?: number;
    /**
    * Tells if table is loading
    */
    'loading'?: boolean;
    /**
    * Tells if to show no results overlay
    */
    'noResults'?: boolean;
  }

  interface SmbTd {
    /**
    * Tells if to add default padding of cell
    */
    'noPadding': boolean;
  }
  interface SmbTdAttributes extends StencilHTMLAttributes {
    /**
    * Tells if to add default padding of cell
    */
    'noPadding'?: boolean;
  }

  interface SmbTh {
    /**
    * Cell unique key. Required if `sort` is used
    */
    'key': number;
    /**
    * Sort type. Leave empty to disable sort
    */
    'sort': 'none' | 'asc' | 'desc' | '';
  }
  interface SmbThAttributes extends StencilHTMLAttributes {
    /**
    * Cell unique key. Required if `sort` is used
    */
    'key'?: number;
    /**
    * Emitted when sorting changes
    */
    'onOnSortChange'?: (event: CustomEvent<IOnSortChange>) => void;
    /**
    * Sort type. Leave empty to disable sort
    */
    'sort'?: 'none' | 'asc' | 'desc' | '';
  }

  interface SmbTr {}
  interface SmbTrAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SmbTablePagination': Components.SmbTablePagination;
    'SmbTable': Components.SmbTable;
    'SmbTd': Components.SmbTd;
    'SmbTh': Components.SmbTh;
    'SmbTr': Components.SmbTr;
  }

  interface StencilIntrinsicElements {
    'smb-table-pagination': Components.SmbTablePaginationAttributes;
    'smb-table': Components.SmbTableAttributes;
    'smb-td': Components.SmbTdAttributes;
    'smb-th': Components.SmbThAttributes;
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

  interface HTMLSmbTrElement extends Components.SmbTr, HTMLStencilElement {}
  var HTMLSmbTrElement: {
    prototype: HTMLSmbTrElement;
    new (): HTMLSmbTrElement;
  };

  interface HTMLElementTagNameMap {
    'smb-table-pagination': HTMLSmbTablePaginationElement
    'smb-table': HTMLSmbTableElement
    'smb-td': HTMLSmbTdElement
    'smb-th': HTMLSmbThElement
    'smb-tr': HTMLSmbTrElement
  }

  interface ElementTagNameMap {
    'smb-table-pagination': HTMLSmbTablePaginationElement;
    'smb-table': HTMLSmbTableElement;
    'smb-td': HTMLSmbTdElement;
    'smb-th': HTMLSmbThElement;
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
