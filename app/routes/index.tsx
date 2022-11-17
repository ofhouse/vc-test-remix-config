import config from 'config';

require.resolve(process.cwd() + '/config/default.json');

export default function Index() {
  const greeting = config.get('hello') as string;

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Hello {greeting}</h1>
    </div>
  );
}
