import express from 'express';
import UserRepository from '../repositories/User';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, role, password } = req.body;

    try {
        await UserRepository.createUser(email, password, role);

        res.status(200).end();
    }
    catch(e) {
        res.status(500).end();
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await UserRepository.deleteUser(id);

        res.status(200).end();
    }
    catch(e) {
        res.status(500).end();
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserRepository.getUserById(id);

        res.status(200).json(user);
    }
    catch(e) {
        res.status(500).end();
    }
})

export default router;