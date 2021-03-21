CREATE TYPE [ams].[Student] as TABLE(
	[StudentID] [int]  NULL,
	[FirstName] [varchar](200) NULL,
	[LastName] [varchar](200) NULL,
	[ParentName] [varchar](500) NULL,
	[ContactNumber] [bigint]  NULL,
	[EmailId] [varchar](500) NULL,
	[Address] [varchar](1000) NULL,
	[City] [varchar](200) NULL,
	[State] [varchar](200) NULL,
	[Country] [varchar](300) NULL,
	[AbroadStudent] [bit] NULL)

