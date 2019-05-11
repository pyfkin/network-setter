class PointsListService {
    getValue() {
        return fetch('http://localhost:3005/points')
            .then((res) => {
                return res.json();
            })
    };

}

export default new PointsListService();