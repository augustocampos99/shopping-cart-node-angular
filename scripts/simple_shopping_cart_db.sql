-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/10/2024 às 15:37
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `simple_shopping_cart_db`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `customers`
--

CREATE TABLE `customers` (
  `id` int(10) NOT NULL,
  `guid` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `customers`
--

INSERT INTO `customers` (`id`, `guid`, `name`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'cb5b9bf6-1528-4b03-be4d-ada94d92e748', 'Augusto Campos', 'augustocampos@gmail.com', '11933446464', '2024-10-29 22:33:27', '2024-10-29 22:33:27'),
(3, '20cd78d0-4bd1-44d4-8a6c-4e084b774edf', 'Fulano de Taus 2001', 'finalodetaus1@gmail.com', '11933444545', '2024-10-30 13:48:31', '2024-10-30 13:48:31'),
(5, 'c25db989-ca5f-4704-8ffc-ba0c2664f752', 'Fulano de Taus 2002', 'finalodetaus2@gmail.com', '11933444545', '2024-10-30 14:07:29', '2024-10-30 14:07:29'),
(6, '8dab4177-c049-491a-b4eb-469f50fa1bd1', 'Fulano de Taus 2002', 'finalodetaus2@gmail.com', '11933444545', '2024-10-30 14:22:29', '2024-10-30 14:22:29'),
(7, '82cedd6d-e410-4a76-8fb2-468642605393', 'Fulano de Taus 2002', 'finalodetaus2@gmail.com', '11933444545', '2024-10-30 14:25:29', '2024-10-30 14:25:29');

-- --------------------------------------------------------

--
-- Estrutura para tabela `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `guid` varchar(50) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `total_price` decimal(6,2) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `orders_products`
--

CREATE TABLE `orders_products` (
  `id` int(10) NOT NULL,
  `guid` varchar(50) NOT NULL,
  `order_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `guid` varchar(50) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `guid`, `title`, `description`, `price`) VALUES
(1, 'b39c3050-81a0-48eb-805f-c2ca48ab2edd', 'Nintendo Switch Oled', 'Nintendo Switch product description', 249.99),
(2, 'f9d64535-8bd6-4344-af08-82dc1192b9a0', 'Nintendo Switch Oled', 'Nintendo Switch product description', 2499.99),
(3, '24ab8426-51f7-43f5-8e9e-075394bb3472', 'XBox series S', 'Sbox series S product description', 2499.99);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_guid` (`guid`);

--
-- Índices de tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_guid` (`guid`),
  ADD KEY `fk_orders_customers` (`customer_id`);

--
-- Índices de tabela `orders_products`
--
ALTER TABLE `orders_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_products_guid` (`guid`),
  ADD KEY `fk_orders_products_product_id` (`product_id`),
  ADD KEY `fk_orders_products_order_id` (`order_id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_guid` (`guid`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `orders_products`
--
ALTER TABLE `orders_products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Restrições para tabelas `orders_products`
--
ALTER TABLE `orders_products`
  ADD CONSTRAINT `fk_orders_products_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `fk_orders_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
