import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { tokens } from '../../../theme'

const FaqPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						An Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum
						fugiat ipsa iusto laudantium magnam nulla officiis pariatur, quaerat quo
						quos reiciendis reprehenderit repudiandae sed sint sunt tenetur veniam
						voluptatum!
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Another Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum
						fugiat ipsa iusto laudantium magnam nulla officiis pariatur, quaerat quo
						quos reiciendis reprehenderit repudiandae sed sint sunt tenetur veniam
						voluptatum!
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Your Favorite question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum
						fugiat ipsa iusto laudantium magnam nulla officiis pariatur, quaerat quo
						quos reiciendis reprehenderit repudiandae sed sint sunt tenetur veniam
						voluptatum!
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant='h5'>
						Some random question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum
						fugiat ipsa iusto laudantium magnam nulla officiis pariatur, quaerat quo
						quos reiciendis reprehenderit repudiandae sed sint sunt tenetur veniam
						voluptatum!
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

export default FaqPage
