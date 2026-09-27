export default function Home() {
  return (
    <section>
      <h1>Welcome to MyApp rajesh 🚀</h1>
      <p>
        Ye ek simple React static website hai. Iska code GitHub pe push hote hi
        GitHub Actions automatically Docker image build karke deploy kar dega.
      </p>
      <div className="cards">
        <div className="card">
          <h3>⚛️ React</h3>
          <p>Frontend UI</p>
        </div>
        <div className="card">
          <h3>🐳 Docker</h3>
          <p>Nginx container me serve</p>
        </div>
        <div className="card">
          <h3>⚙️ GitHub Actions</h3>
          <p>Automatic CI/CD</p>
        </div>
      </div>
    </section>
  )
}
