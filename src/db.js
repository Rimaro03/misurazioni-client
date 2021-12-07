export default getData = () => {
    let connection = mysql.createConnection({
        host: '192.168.5.117',
        user: 'admin',
        password: '7907',
        database: 'misurazioni',
    });

    connection.connect();


    connection.query('SELECT * FROM misure', function (error, results, fields) {
        if (error) throw error;
        return results;
    });

    connection.end();
}