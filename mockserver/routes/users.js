const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Find All
router.get('/', (req, res) => {
    console.log(req.query.id);
    User.findOneByUserId(req.query.id)
    .then((users) => {
      if (!users) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${users}`);
    })
    .catch(err => res.status(500).send(err));
});

router.post('/logout', (req,res) => {
    req.session.destroy(err => { if(err) throw err; });
    return res.json({ success: true });
})

router.post('/register', (req, res) => {
    const { id, userName, password } = req.body
    let newUser = null

    const create = (user) => {
        if(user) {
            throw new Error('username exists')
        } else {
            return User.create(id, userName, password)
        }
    }

    const count = (user) => {
        newUser = user
        return User.count({}).exec()
    }

    const assign = (count) => {
        if(count === 1) {
            return newUser.assignAdmin()
        } else {
            // if not, return a promise that returns false
            return Promise.resolve(false)
        }
    }

    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        })
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findOneByUserId(id)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError)
});

router.post('/login',(req, res) => {
    const { id, password } = req.body;
    const secret = req.app.get('jwt-secret');

    const check = (user) => {
        if(!user) {
            throw new Error('login failed')
        } else {
            if(user.verify(password)) {
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            id: user.id,
                            admin: user.admin
                        }, 
                        secret, 
                        {
                            expiresIn: '7d',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if (err) reject(err)
                            resolve(token) 
                        })
                })
                return p
            } else {
                throw new Error('login failed')
            }
        }
    }
    const respond = (token) => {
        // ALTER SESSION
        let session = req.session;
        session.loginInfo = {
            id: User.id
        };

        res.json({
            success: true,
            token
        })
    }
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }
    // find the user
    User.findOneByUserId(id)
    .then(check)
    .then(respond)
    .catch(onError)
});


module.exports = router;