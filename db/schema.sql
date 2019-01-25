DROP table if exists burgers;

CREATE TABLE burgers (
   id INT NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR (255) NOT NULL,
   devoured BOOLEAN DEFAULT false,
   createdAt TIMESTAMP on update current_timestamp,
   PRIMARY KEY (id)
);