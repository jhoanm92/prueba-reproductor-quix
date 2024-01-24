import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Canciones from "./pages/Canciones";
import Inicio from "./pages/Home";
import Navbar from "./components/Navbar/Navigationbar";
import { AuthProvider } from "./providers/AuthProvider";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { CancionesProvider } from "./providers/CancionesProvider";
import CancionesCrear from "./pages/CancionesCerear";
import ListaReproduccion from "./pages/ListaReproduccion";
import { PLaylistProvider } from "./providers/PlayListProvider";
import ListaReproduccionCrear from "./pages/ListaReproduccionCrear";

function App() {
  return (
    <>
      <AuthProvider>
        <CancionesProvider>
          <PLaylistProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Inicio />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/canciones"
                element={
                  <ProtectedRoute>
                    <Canciones />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/canciones/crear"
                element={
                  <ProtectedRoute>
                    <CancionesCrear />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/canciones/:id"
                element={
                  <ProtectedRoute>
                    <CancionesCrear />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/lista-reproduccion"
                element={
                  <ProtectedRoute>
                    <ListaReproduccion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/lista-reproduccion/crear"
                element={
                  <ProtectedRoute>
                    <ListaReproduccionCrear />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/lista-reproduccion/:id"
                element={
                  <ProtectedRoute>
                    <ListaReproduccionCrear />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </PLaylistProvider>
        </CancionesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
