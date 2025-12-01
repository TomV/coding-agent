import { Mastra } from '@mastra/core/mastra';
import { SqliteSyncStore } from '@mastra/sqlite';
import { PinoLogger } from '@mastra/loggers';
import { codingAgent } from './agents/coding-agent';

export const mastra = new Mastra({
  agents: { codingAgent },
  storage: new SqliteSyncStore({
    dbPath: '.mastra/db.sqlite',
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  }),
  observability: {
    default: {
      enabled: true,
    },
  },
});
