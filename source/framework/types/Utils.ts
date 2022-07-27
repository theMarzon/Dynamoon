export type DeletePropertyType
    = string
    | number
    | symbol;

export interface DeletePropertyOption {

    [key: DeletePropertyType]: unknown
};
