const createTodoItemsTableQuery = `
    CREATE TABLE todo_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        task VARCHAR(255) NOT NULL
    )
`;

module.exports = {
    createTodoItemsTableQuery
};
