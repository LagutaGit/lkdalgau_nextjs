'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format, parse, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={ru} // Устанавливаем русскую локализацию
      className={cn('p-1 sm:p-2 md:p-3 lg:p-4', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 md:gap-6', // Гибкое расположение
        month: 'flex justify-between flex-col gap-1 sm:gap-2',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-xs sm:text-sm md:text-base font-medium',
        nav: 'flex  justify-betweenitems-center gap-1',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'size-5 sm:size-6 md:size-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-x-0.5 sm:space-x-1',
        head_row: 'flex justify-between',
        head_cell: 'text-muted-foreground rounded-md w-6 sm:w-8 md:w-10 font-normal text-[0.6rem] sm:text-[0.7rem] md:text-sm',
        row: 'flex justify-between w-full mt-1 sm:mt-2',
        cell: cn(
          'relative p-0 text-center text-xs sm:text-sm md:text-base focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-6 sm:size-8 md:size-10 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_start: 'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_range_end: 'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'day-outside text-muted-foreground aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('size-3 sm:size-4 md:size-5', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('size-3 sm:size-4 md:size-5', className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };