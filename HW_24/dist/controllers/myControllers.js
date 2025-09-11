export const myGetController = (req, res) => {
    res.status(200).send('Hello world!');
};
export const myPostController = (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Hello ${name}`);
};
//# sourceMappingURL=myControllers.js.map