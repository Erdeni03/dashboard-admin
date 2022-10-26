import {
	BarChartOutlined,
	CalendarMonthOutlined,
	ContactsOutlined,
	DescriptionOutlined,
	GroupOutlined,
	HomeOutlined,
	LiveHelpOutlined,
	MapOutlined,
	PersonOutlineOutlined,
	PieChartOutlined,
	StackedLineChartOutlined
} from '@mui/icons-material'

const mainNavTree = [
	{
		key: 'home',
		path: `/home`,
		title: '',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'home-dashboard',
				path: `/home/dashboard`,
				title: 'Dashboard',
				icon: HomeOutlined,
				breadcrumb: false,
				submenu: []
			}
		]
	}
]

const dataNavTree = [
	{
		key: 'data',
		path: `/data`,
		title: 'Data',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'data-manage-team',
				path: `/data/manage-team`,
				title: 'Manage Team',
				icon: GroupOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'data-contacts-information',
				path: `/data/contacts-information`,
				title: 'Contacts information',
				icon: ContactsOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'data-invoices-balances',
				path: `/data/invoices-balances`,
				title: 'Invoices Balances',
				icon: DescriptionOutlined,
				breadcrumb: false,
				submenu: []
			}
		]
	}
]

const pagesNavTree = [
	{
		key: 'pages',
		path: `/pages`,
		title: 'Pages',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'pages-profile-form',
				path: `/pages/profile-form`,
				title: 'Profile Form',
				icon: PersonOutlineOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'pages-calendar',
				path: `/pages/calendar`,
				title: 'Calendar',
				icon: CalendarMonthOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'pages-faq-page',
				path: `/pages/faq-page`,
				title: 'FAQ Page',
				icon: LiveHelpOutlined,
				breadcrumb: false,
				submenu: []
			}
		]
	}
]

const chartsNavTree = [
	{
		key: 'chart',
		path: `/chart`,
		title: 'Charts',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'chart-bar-chart',
				path: `/chart/bar-chart`,
				title: 'Bar Chart',
				icon: BarChartOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'chart-pie-chart',
				path: `/chart/pie-chart`,
				title: 'Pie Chart',
				icon: PieChartOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'chart-line-chart',
				path: `/chart/line-chart`,
				title: 'Line Chart',
				icon: StackedLineChartOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'chart-geography-chart',
				path: `/chart/geography-chart`,
				title: 'Geography Chart',
				icon: MapOutlined,
				breadcrumb: false,
				submenu: []
			}
		]
	}
]

const navigationConfig = [
	...mainNavTree,
	...dataNavTree,
	...pagesNavTree,
	...chartsNavTree
]

export default navigationConfig
