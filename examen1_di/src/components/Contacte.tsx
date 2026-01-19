import { useState, useRef, useEffect } from "react";

export function Contacte(){
    const [formData, setFormData] = useState({
        nom: "",
        cognoms: "",
        correu: "",
        telefon: "",
        missatge: ""
    })

    const [enviada, setEnviada] = useState(false);
    const inputNomRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputNomRef.current?.focus();
    }, []);

    const handleChange =  (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulari enviat:", formData);
    setEnviada(true);
    setFormData({
      nom: "",
      cognoms: "",
      correu: "",
      telefon: "",
      missatge: "",
    });
    setTimeout(() => setEnviada(false), 3000);
  };

  return(
    <div>
        <div>
            <div>
                <h1>CONTACTE</h1>
            </div>

            <form onSubmit={handleSubmit} aria-label="Formulari de Contacte" role="form">
                <div>
                    <input 
                        ref={inputNomRef} 
                        type="text" 
                        name="nom" 
                        placeholder="Nom *" 
                        value={formData.nom} 
                        onChange={handleChange} 
                        required 
                        onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
                        onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
                        aria-label="Nom complet"
                        aria-required="true"
                    />
                    <input
                        type="text"
                        name="cognoms"
                        placeholder="Cognoms *"
                        value={formData.cognoms}
                        onChange={handleChange}
                        required
                        onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
                        onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
                        aria-label="Cognoms"
                        aria-required="true"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="correu"
                        placeholder="Correu electrònic *"
                        value={formData.correu}
                        onChange={handleChange}
                        required
                        onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
                        onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
                        aria-label="Correu electrònic"
                        aria-required="true"
                    />
                    <input
                        type="tel"
                        name="telefon"
                        placeholder="Telèfon"
                        value={formData.telefon}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
                        onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
                        aria-label="Número de telèfon"
                    />
                </div>
                <textarea
                    name="missatge"
                    placeholder="Explica'ns en què podem ajudar-te"
                    value={formData.missatge}
                    onChange={handleChange}
                    rows={6}
                    onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
                    onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
                    aria-label="Missatge o consulta"
                />

                <div>
                    <button
                    type="submit"
                    className="px-12 py-3 font-bold text-lg rounded-lg transition duration-300 cursor-pointer"
                    style={{ backgroundColor: "#0b419b", color: "#ffcc00" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#082e5e")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0b419b")}
                    aria-label="Enviar formulari de contacte"
                    role="button"
                    >
                    ENVIA EL MISSATGE
                    </button>
                </div>
            </form>
            {enviada && (
                <div className="mt-6 p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded" role="alert" aria-live="polite" aria-atomic="true">
                    <p className="font-semibold">✓ Missatge enviat correctament!</p>
                    <p>Ens posarem en contacte amb tu aviat.</p>
                </div>
            )}
        </div>
    </div>
  );
};