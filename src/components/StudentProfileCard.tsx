"use client"
import React, { Children, ComponentProps, FC, ReactElement, ReactNode, useMemo, useState } from "react";

import { enums } from "@/utilities/enums";
import { getAcknowledgementResponse } from "@/dtos/getAcknowledgementResponse";
import { format } from "date-fns";
import { ChevronDown, Dot } from "lucide-react";
import { Button } from "@mantine/core";
import { start } from "repl";

interface AcknowledgementProps extends Omit<getAcknowledgementResponse, "StudentId" | "Student" | "Id" | "Description"> {
    children?: string | string[];
}

interface StudentProfileCardProps extends Omit<ComponentProps<"div">, "className"> {
    studentId?: string;
    fullName?: string;
    description?: string;
    children: ReactElement<AcknowledgementProps, typeof AcknowledgementListItem>[]
}

export const StudentProfileCard: FC<StudentProfileCardProps> = ({ studentId, fullName, description, children, ...props }) => {
    const [showHidden, setShowHidden] = useState(false);

    const { visibleChildren, childrenLenght } = useMemo(() => {
        // let formatted = Children.map(children, child => {
        //     if (!React.isValidElement(child)) return
        //     return { StartDate: child.props.StartDate, child }
        // }).sort((left, right) => left.StartDate.getTime() - right.StartDate.getTime())
        let visibleChildren = Children.toArray(children);
        let otherChildren = visibleChildren;
        let childrenLenght = Children.toArray(children).length

        if (!showHidden || Children.count(children) <= 2) {
            otherChildren = visibleChildren.slice(childrenLenght - 3)
            visibleChildren = visibleChildren.slice(0, 2);
        }
        else
            otherChildren = [];


        return { visibleChildren, childrenLenght, otherChildren }
    }, [showHidden])

    return <div {...props} className="px-10 py-7 bg-slate-50 flex gap-10 flex-col h-fit shadow-lg max-w-300 outline-accent hover:outline-2 group/studentcard transition-all transition-200">

        <div>
            <div className="py-2">
                <span className="font-bold text-base">{studentId}</span>
                <Dot className="inline-block" />
                <span className="font-semibold text-base">{fullName}</span>
            </div>
            {
                description && (
                    <div>
                        <p>{description}</p>
                    </div>
                )
            }
        </div>
        {visibleChildren}
        {childrenLenght > 2 && !showHidden && (
            <div className="text-center text-gray-400 font-semibold group-hover/studentcard:hidden ">Show {childrenLenght} more</div>
        )}
        <div className="group-hover/studentcard:flex hidden h-fit gap-5 justify-end">
            {childrenLenght > 2 && <Button className="w-fit text-nowrap" onClick={e => setShowHidden(c => !c)}>{showHidden ? "Show less" : "Show more"}<ChevronDown className="inline-block" /></Button>}
            <Button className="bg-accent p-2 rounded-xs">Acknowledge</Button>
        </div>
    </div>
}

export const AcknowledgementListItem: FC<AcknowledgementProps> = ({ StartDate, EndDate, Type, Place, OtherType, children, ...props }) => {
    return <div {...props} className=" bg-slate-50 **:text-sm">
        <p className="border-b border-slate-300 px-1 py-2">
            <span className="text-gray-500">
                {StartDate && <span>{format(StartDate, "YYY/MM/dd")}</span>}
                {EndDate && <span> - {format(EndDate, "YYY/MM/dd")}</span>}
            </span>
            {" "}
            <span className="text-primary-500 font-semibold">
                {Type === 0 ? OtherType : enums.acknowledgementType[Type]}
            </span>
            {" "}
            {Place && (
                <span className="">
                    at {Place}
                </span>
            )}
        </p>
        {children && (
            <p className="bg-slate-100 p-3">
                {children}
            </p>
        )}
    </div>
}