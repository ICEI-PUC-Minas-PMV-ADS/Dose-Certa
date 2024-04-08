CREATE DATABASE dosecerta;

# Tabela Usuário
CREATE TABLE IF NOT EXISTS dosecerta.User (
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `UserType` varchar(50) NOT NULL,
  `Id` int NOT NULL AUTO_INCREMENT,
  `HouseId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
);

# Tabela Residênca
CREATE TABLE IF NOT EXISTS dosecerta.Residencia (
  id VARCHAR(24) NOT NULL,
  Rua VARCHAR(50) NOT NULL,
  Numero INT NOT NULL,
  Complemento VARCHAR(30),
  Bairro VARCHAR(50) NOT NULL,
  Cidade VARCHAR(100) NOT NULL,
  AgenteID VARCHAR(24),
  PRIMARY KEY (id)
);

# Tabela Notificações
CREATE TABLE IF NOT EXISTS dosecerta.Notificacao (
  id VARCHAR(24) NOT NULL,
  Mensagem VARCHAR(255) NOT NULL,
  DataCriacao DATETIME NOT NULL,
  Lida ENUM('Sim', 'Nao') NOT NULL,
  Usuario_id VARCHAR(24),
  Residencia_id VARCHAR(24),
  PRIMARY KEY (id),
  FOREIGN KEY (Usuario_id) REFERENCES dosecerta.Usuario(id),
  FOREIGN KEY (Residencia_id) REFERENCES dosecerta.Residencia(id)
);

CREATE TABLE IF NOT EXISTS dosecerta.`message` (
  `MessageId` int NOT NULL AUTO_INCREMENT,
  `SenderId` int NOT NULL,
  `ReceiverId` int NOT NULL,
  `Content` text NOT NULL,
  `SentAt` datetime NOT NULL,
  PRIMARY KEY (`MessageId`)
);

