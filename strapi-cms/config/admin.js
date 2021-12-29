module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2c96265cf9af06d8fa18c4952afcc43b'),
  },
});
