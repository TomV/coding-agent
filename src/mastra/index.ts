import { Mastra } from '@mastra/core/mastra';
//import { LibSQLStore } from '@mastra/libsql';
import { PinoLogger } from '@mastra/loggers';
import { codingAgent } from './agents/coding-agent';
//## quick test: disable persistance:
export const mastra = new Mastra({
  agents: { codingAgent },
  // storage: undefined,  // No persistence
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


/*** before
export const mastra = new Mastra({
  agents: { codingAgent },
  storage: new LibSQLStore({ 
    url: 'file:./.mastra/mastra.db'  // Fixed path - removed ../../
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
**/
