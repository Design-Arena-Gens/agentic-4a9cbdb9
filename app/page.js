const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export default function HomePage() {
  return (
    <main>
      <h1>{getGreeting()}, friend 👋</h1>
      <p>
        Thanks for stopping by. Stay curious, stay kind, and keep saying hello.
      </p>
    </main>
  );
}
