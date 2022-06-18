import Header from "../components/Header";
export default function PageNotFound() {
  return (
    <>
      <Header />
      <div
        style={{ height: "90vh" }}
        className="d-flex align-items-center justify-content-center flex-column"
      >
        <h1>404. OPS!!</h1>
        <h2 style={{ color: "#666" }}>Página não encontrada.</h2>
      </div>
    </>
  );
}
