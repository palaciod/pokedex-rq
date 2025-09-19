import React, { FC } from "react";
import useBadgeStyles from "./Badge.styles";

type BadgeProps = {
    type: string;
};

export const Badge: FC<BadgeProps> = ({ type }) => {
    const classes = useBadgeStyles();
    return (<span key={type} className={classes.typeBadge}>{type}</span>);
}
