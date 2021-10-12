USE [master]
GO
/****** Object:  Database [WebshopDB]    Script Date: 2021-10-12 15:07:42 ******/
CREATE DATABASE [WebshopDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WebshopDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\WebshopDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WebshopDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\WebshopDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [WebshopDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WebshopDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WebshopDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WebshopDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WebshopDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WebshopDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WebshopDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [WebshopDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WebshopDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WebshopDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WebshopDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WebshopDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WebshopDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WebshopDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WebshopDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WebshopDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WebshopDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WebshopDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WebshopDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WebshopDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WebshopDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WebshopDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WebshopDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WebshopDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WebshopDB] SET RECOVERY FULL 
GO
ALTER DATABASE [WebshopDB] SET  MULTI_USER 
GO
ALTER DATABASE [WebshopDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WebshopDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WebshopDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WebshopDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [WebshopDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [WebshopDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'WebshopDB', N'ON'
GO
ALTER DATABASE [WebshopDB] SET QUERY_STORE = OFF
GO
USE [WebshopDB]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 2021-10-12 15:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[OrderDate] [date] NULL,
	[SumTotal] [money] NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 2021-10-12 15:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[OrderID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[Quantity] [int] NULL,
	[Size] [int] NULL,
 CONSTRAINT [PK_OrderDetails] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC,
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 2021-10-12 15:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Price] [int] NULL,
	[Description] [nvarchar](200) NULL,
	[Category] [nvarchar](50) NULL,
	[MinSize] [int] NULL,
	[MaxSize] [int] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 2021-10-12 15:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](200) NULL,
	[Phone] [nvarchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_User]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Order] FOREIGN KEY([OrderID])
REFERENCES [dbo].[Order] ([OrderID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Order]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Product] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Product] ([ProductID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Product]
GO
USE [master]
GO
ALTER DATABASE [WebshopDB] SET  READ_WRITE 
GO
