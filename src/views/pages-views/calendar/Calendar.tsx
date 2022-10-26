import { DateSelectArg, EventClickArg } from '@fullcalendar/core'
import '@fullcalendar/core/vdom'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar, { EventApi, formatDate } from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'

import { tokens } from '../../../theme'

const Calendar = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
	// const currentEvents = useRef<EventApi[]>([])

	const handleDateClick = (selected: DateSelectArg | any) => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect()

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay
			})
		}
	}

	const handleEventClick = (selected: EventClickArg) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event ${selected.event.title}`
			)
		) {
			selected.event.remove()
		}
	}
	return (
		<Box display='flex' justifyContent='space-between'>
			<Box
				flex='1 1 20%'
				bgcolor={colors.primary[400]}
				p='15px'
				borderRadius='4px'
			>
				<Typography variant='h5'>Events</Typography>
				<List>
					{currentEvents.map((event: any) => (
						<ListItem
							key={event.id}
							sx={{
								backgroundColor: colors.greenAccent[500],
								margin: '10px 0',
								borderRadius: '2px'
							}}
						>
							<ListItemText
								primary={event.title}
								secondary={
									<Typography>
										{formatDate(event.start, {
											year: 'numeric',
											month: 'short',
											day: 'numeric'
										})}
									</Typography>
								}
							/>
						</ListItem>
					))}
				</List>
			</Box>
			{/*<Box flex='1 1 100%' ml='15px'>*/}
			{/*	<FullCalendar*/}
			{/*		plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}*/}
			{/*		headerToolbar={{*/}
			{/*			left: 'prev,next today',*/}
			{/*			center: 'title',*/}
			{/*			right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'*/}
			{/*		}}*/}
			{/*		initialView='dayGridMonth'*/}
			{/*		editable={true}*/}
			{/*		selectable={true}*/}
			{/*		selectMirror={true}*/}
			{/*		dayMaxEvents={true}*/}
			{/*		select={handleDateClick}*/}
			{/*		eventClick={handleEventClick}*/}
			{/*		eventsSet={events => setCurrentEvents(events)}*/}
			{/*		initialEvents={[*/}
			{/*			{*/}
			{/*				id: '12315',*/}
			{/*				title: 'All-day event',*/}
			{/*				date: '2022-09-14'*/}
			{/*			},*/}
			{/*			{*/}
			{/*				id: '5123',*/}
			{/*				title: 'Timed event',*/}
			{/*				date: '2022-09-28'*/}
			{/*			}*/}
			{/*		]}*/}
			{/*	/>*/}
			{/*</Box>*/}
		</Box>
	)
}

export default Calendar
