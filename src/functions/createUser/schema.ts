export default {
  type: 'object',
  properties: {
    name: { type: 'string' },
    address: { type: 'string' },
    phone: { type: 'string' },
  },
  required: ['name', 'address', 'phone'],
} as const;
