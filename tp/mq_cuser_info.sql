-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-06 12:50:08
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `mq_cuser_info`
--

CREATE TABLE `mq_cuser_info` (
  `id` int(8) UNSIGNED NOT NULL COMMENT '主键自增',
  `uid` int(10) NOT NULL,
  `companyname` varchar(255) DEFAULT NULL COMMENT '企业名称',
  `hremail` varchar(255) DEFAULT NULL COMMENT 'hr邮箱',
  `thumburl` varchar(255) DEFAULT NULL COMMENT '企业logo',
  `comphone` varchar(255) DEFAULT NULL COMMENT '企业电话',
  `city` int(11) DEFAULT NULL COMMENT '所在城市关联城市表',
  `hrname` varchar(255) DEFAULT NULL COMMENT 'hr姓名',
  `hrphone` varchar(255) DEFAULT NULL COMMENT 'hr联系电话',
  `nature` varchar(255) DEFAULT NULL COMMENT '企业性质',
  `scale` varchar(255) DEFAULT NULL COMMENT '企业规模',
  `description` text COMMENT '企业描述',
  `isrz` tinyint(4) DEFAULT NULL COMMENT '是否认证',
  `address` varchar(255) DEFAULT NULL,
  `comurl` varchar(255) NOT NULL,
  `industry` int(10) NOT NULL DEFAULT '101'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mq_cuser_info`
--

INSERT INTO `mq_cuser_info` (`id`, `uid`, `companyname`, `hremail`, `thumburl`, `comphone`, `city`, `hrname`, `hrphone`, `nature`, `scale`, `description`, `isrz`, `address`, `comurl`, `industry`) VALUES
(1, 1, '四川什么科技', '33333@qq.com', 'http://www.baidu.com', '13800138000', 111, '张伟', '13800138001', '111', '111', '我的的得到额阿什顿发多少发送到', 11, NULL, '', 101),
(2, 4, '四川优项科技有限公司', 'hr@uoxiang.com', '20170706\\fc6db6015dd95633c9f6de7d177d5a47.png', NULL, 510100, NULL, NULL, NULL, '101', '啊是打发是打发斯蒂芬撒的发生的', NULL, '四川省成都市航天科技大', 'http://www.uoxiang.com', 101);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mq_cuser_info`
--
ALTER TABLE `mq_cuser_info`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `mq_cuser_info`
--
ALTER TABLE `mq_cuser_info`
  MODIFY `id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键自增', AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
