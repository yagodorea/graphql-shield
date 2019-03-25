import { agents } from './data/data';
import { fieldPermissions } from './data/permissions';

export default {
    Query: {
        agent: (obj: any, args: any, context: any): any => {
            if (context.level >= 2) {
                return agents.find(agent => agent.id == args.id);
            }
            return null;
        },
        agents: (obj: any, args: any, context: any) => {
            if (context.level >= 2) {
                return agents;
            }
            return null;
        }
    },
    Agent: {
        id: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.id) {
                return obj.id;
            }
            return null;
        },
        firstName: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.firstName) {
                return obj.firstName;
            }
            return null;
        },
        lastName: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.lastName) {
                return obj.lastName;
            }
            return null;
        },
        age: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.age) {
                return obj.age;
            }
            return null;
        },
        level: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.level) {
                return obj.level;
            }
            return null;
        },
        type: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.type) {
                return obj.type;
            }
            return null;
        },
        secretCode: (obj: any, args: any, context: any) => {
            if (context.level >= fieldPermissions.secretCode) {
                return obj.secretCode;
            }
            return null;
        }
    }
};