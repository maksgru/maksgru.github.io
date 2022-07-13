type EnvType = 'development' | 'production';
const env = (process.env.NODE_ENV || process.env.REACT_APP_ENV || 'development') as EnvType;

type ConfigType = {
  [env in EnvType]: {
    swapiUrl: string;
  }
};

const config: ConfigType = {
  development: {
    swapiUrl: 'https://swapi.dev/api/'
  },
  production: {
    swapiUrl: 'https://swapi.dev/api/'
  }
};

export default config[env];
