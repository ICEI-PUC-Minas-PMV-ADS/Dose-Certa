CREATE DATABASE dosecerta;

# Tabela Usuário
CREATE TABLE IF NOT EXISTS dosecerta.user (
  id VARCHAR(24) NOT NULL,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  tipo VARCHAR(8) NOT NULL,
  Residencia_id VARCHAR(24),
  PRIMARY KEY (id),
  FOREIGN KEY (Residencia_id) REFERENCES dosecerta.Residencia(id)
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

