export type ArmySiteCategory = 'medical' | 'administrative' | 'publication'
export type ArmySiteDefinition = {
	url: string
	title: string
	category: Array<ArmySiteCategory>
	desc: string
	note?: string
	cac?: boolean
	image?: string
}
export type ArmySiteDefinitions = Array<ArmySiteDefinition>

export const ArmySites: ArmySiteDefinitions = [
	{
		url: 'https://www.armyresilience.army.mil/suicide-prevention/index.html',
		title: 'Army Suicide Prevention',
		category: ['medical'],
		desc: 'An Army program that provides resources for suicide prevention, intervention skills, and support to those impacted by the loss of a loved one to suicide to develop healthy and resilient Soldiers, reduce stigma, and build awareness of suicide and related behaviors.',
		note: 'Military Crisis Line: Call 988 and Press 1',
		image: 'public/army-suicide-prevention.jpg'
	},
	{
		url: 'https://ipps-a.army.mil/',
		title: 'The Integrated Personnel and Pay System - Army (IPPS-A)',
		category: ['administrative'],
		desc: "The Integrated Personnel and Pay System - Army (IPPS-A) is the Army’s online Human Resources (HR) solution to provide integrated HR capabilities across all Army Components.",
		note: 'Click the Login button to access the system.',
		cac: true
	},
	{
		url: 'https://mypay.dfas.mil/',
		title: 'MyPay',
		category: ['administrative'],
		desc: "The Defense Department's online payroll and accounting system, providing access to view one's pay account, view travel claims, make changes to withholding and allotments, and chance Thrift Savings Plan contributions.",
		note: 'Access via CAC and DSLogin available',
	},
	{
		url: 'https://iperms.hrc.army.mil/',
		title: 'iPERMS',
		category: ['administrative'],
		desc: "An online information management system used for storing and managing military personnel records. It electronically stores evaluation reports, some medical documents, college and military transcripts, awards, diplomas, and more.",
		note: 'Access via CAC and DSLogin available'
	},
	{
		url: 'https://medpros.mods.army.mil/portal',
		title: 'Medical Readiness Portal (MEDPROS)',
		category: ['medical'],
		desc: "The Army's automated database designed to meet Department of Defense requirements in maintaining unit and individual medical readiness. It is designed to provide commanders with a real-time, world-wide operational system to manage the medical readiness and deployability of their unit.",
		cac: true
	}
]
