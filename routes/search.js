// search.js
import { Router } from 'express';
const router = Router();

router.get('/search', (req, res) => {
    const query = req.query.query;
    // Mahsulotlarni qidirish logikasini qo'shing
    res.render('searchResults', {
        title: 'Search Results',
        query,
        // results: qidiruv natijalari
    });
});

export default router;
