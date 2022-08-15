export const userMessageTypes = <const>['customer', 'user'];

export type UserMessageType = typeof userMessageTypes[number];
