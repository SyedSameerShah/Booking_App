import React from 'react'
import Cell from './Cell';
import { addMonths, differenceInDays, endOfMonth, format, getDaysInMonth, startOfMonth, sub, subMonths } from 'date-fns';

function Calender() {

   const daysofweek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

   const startdate = startOfMonth(new Date("2023-04-03"));
   const enddate = endOfMonth(new Date("2023-04-03"));
   const numofdays = getDaysInMonth(startdate);
   const prenodays = getDaysInMonth(subMonths(startdate,1));
   const days = Array.from({length: numofdays});
   const prefixday = startdate.getDay(); 
   let no = prenodays - prefixday + 1;
   const suffixdays = addMonths(startdate,1).getDay() >0 ? 7 - addMonths(startdate,1).getDay() : 0 ;


    const prevmonth = () => sub(startdate,{ months: 1 } )
    
  return (
    <>
        <h1 className=' text-3xl font-bold underline'>calender</h1>
        <div className="w-[600px] grid grid-cols-7 items-center justify-center">
            <Cell display = "<<"></Cell>
            <Cell display = "<" onclick = {prevmonth}></Cell>
            <Cell display = {format(startdate, "LLLL yyyy")} className = "col-span-3"></Cell>
            <Cell display = ">"></Cell>
            <Cell display = ">>"></Cell>

            {
                daysofweek.map((value, index) => {
                   return <Cell display={value} className = "bold"></Cell>
                })
            }
            {
                Array.from({length:prefixday }).map(( _ ,index) =>{
                    
                    return <Cell display={no++}></Cell>
                })
            }
            {
                days.map((value, index) => {
                    return <Cell display={index +1} ></Cell>
                })
            }
            {
                Array.from({length : suffixdays }).map((_,index) =>{
                    return <Cell display = {index + 1}></Cell>
                })
            }

        </div>
    </>
  )
}

export default Calender;