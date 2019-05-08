
--
-- Estructura de tabla para la tabla contactos
--

CREATE TABLE `contactos` (
  `id` varchar(20) NOT NULL,
  `surName` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `profileImageUrl` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Estructura de tabla para la tabla mensajes
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `origen` varchar(50) NOT NULL,
  `destino` varchar(50) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `contenido` longblob NOT NULL,
  `leido` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Volcado de datos para la tabla contactos
--

INSERT INTO `contactos` (`id`, `surName`, `name`, `profileImageUrl`) VALUES
('dbg00011', 'Barrios García', 'David', 'http://ssaatt.com/whatsat/profiles/dbg00011.png'),
('mdbm0009', 'Béjar Martos', 'María Dolores', 'http://ssaatt.com/whatsat/profiles/mdbm0009.png'),
('mnba0001', 'Bouhachi Ajbar', 'Mohamad Nasar', 'http://ssaatt.com/whatsat/profiles/mnba0001.png'),
('ibn00006', 'Buendía Núñez', 'Isabel', 'http://ssaatt.com/whatsat/profiles/ibn00006.png'),
('ccm00083', 'Camacho Martínez', 'Carlos', 'http://ssaatt.com/whatsat/profiles/ccm00083.png'),
('saeo0001', 'Edu Onvang', 'Sergio Alberto Asu', 'http://ssaatt.com/whatsat/profiles/saeo0001.png'),
('sfm00028', 'Fernández Muñoz', 'Silvestre', 'http://ssaatt.com/whatsat/profiles/sfm00028.png'),
('maga0018', 'Gallardo Alarcón', 'Miguel Angel', 'http://ssaatt.com/whatsat/profiles/maga0018.png'),
('agc00182', 'Garcia Cañadilla', 'Alberto', 'http://ssaatt.com/whatsat/profiles/agc00182.png'),
('sgp00036', 'García Peinado', 'Silvia', 'http://ssaatt.com/whatsat/profiles/sgp00036.png'),
('rgr00069', 'Gómez Ruíz', 'Raúl', 'http://ssaatt.com/whatsat/profiles/rgr00069.png'),
('pgm00039', 'Góngora Molina', 'Pablo', 'http://ssaatt.com/whatsat/profiles/pgm00039.png'),
('ghf00003', 'Higueras Fernández', 'Gloria', 'http://ssaatt.com/whatsat/profiles/ghf00003.png'),
('sib00002', 'Ibongo Baca', 'Severiano', 'http://ssaatt.com/whatsat/profiles/sib00002.png'),
('jmlr0012', 'Lorite Rodriguez', 'Juan Manuel', 'http://ssaatt.com/whatsat/profiles/jmlr0012.png'),
('jms00051', 'Muñoz Sicilia', 'Javier', 'http://ssaatt.com/whatsat/profiles/jms00051.png'),
('aoc00025', 'Orzaes Céspedes', 'Adolfo', 'http://ssaatt.com/whatsat/profiles/aoc00025.png'),
('fpg00015', 'Pachón Gallardo', 'Francisco', 'http://ssaatt.com/whatsat/profiles/fpg00015.png'),
('jjrv0001', 'Ramírez Vílchez', 'Juan José', 'http://ssaatt.com/whatsat/profiles/jjrv0001.png'),
('drp00023', 'Ruiz Pelaez', 'David', 'http://ssaatt.com/whatsat/profiles/drp00023.png'),
('jmsa0012', 'Salgado Alvarado', 'Julissa Michelle', 'http://ssaatt.com/whatsat/profiles/jmsa0012.png'),
('dsl00012', 'Salido Lozano', 'David', 'http://ssaatt.com/whatsat/profiles/dsl00012.png'),
('fsc00015', 'Santos Cozar', 'Francisco', 'http://ssaatt.com/whatsat/profiles/fsc00015.png'),
('msm00084', 'Soler Martínez', 'Marta', 'http://ssaatt.com/whatsat/profiles/msm00084.png'),
('amvc0010', 'Vela Cobo', 'Ana María', 'http://ssaatt.com/whatsat/profiles/amvc0010.png'),
('vmvc0001', 'Vidal Caro', 'Victor Manuel', 'http://ssaatt.com/whatsat/profiles/vmvc0001.png'),
('mvc00037', 'Villar Campo', 'Manuel Luis', 'http://ssaatt.com/whatsat/profiles/mvc00037.png'),
('sd000024', 'Drammeh', 'Suwaraba', 'http://ssaatt.com/whatsat/profiles/sd000024.png'),
('jfs00014', 'Fontiveros Sánchez', 'Juan', 'http://ssaatt.com/whatsat/profiles/jfs00014.png'),
('agd00021', 'García Díez', 'Álvaro', 'http://ssaatt.com/whatsat/profiles/agd00021.png'),
('mra00060', 'Roldán Aranda', 'Mónica', 'http://ssaatt.com/whatsat/profiles/mra00060.png'),
('atm00050', 'Trujillo Moya', 'Alejandro', 'http://ssaatt.com/whatsat/profiles/atm00050.png'),
('alc00101', 'López Casanova', 'Alberto', 'http://ssaatt.com/whatsat/profiles/alc00101.png'),
('jemunoz', 'Muñoz Exposito', 'José Enrique', 'http://ssaatt.com/whatsat/profiles/jemunoz.jpg'),
('jccuevas', 'Cuevas Martinez', 'Juan Carlos', 'http://ssaatt.com/whatsat/profiles/jccuevas.png'),
('mavd0001', 'Ventura Duque', 'Manuel Antonio', 'http://ssaatt.com/whatsat/profiles/mavd0001.png');


