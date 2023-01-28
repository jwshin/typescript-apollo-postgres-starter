CREATE TABLE board (
  id SERIAL NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  title VARCHAR(256),
  description TEXT,
  path VARCHAR(256)
);

INSERT INTO board (created_at, updated_at, title, description, path) VALUES
  (NOW(), NOW(), 'First', 'the first desc', '/first'),
  (NOW(), NOW(), 'Second', 'the second desc', '/second'),
  (NOW(), NOW(), 'Third', 'the third desc', '/third');
