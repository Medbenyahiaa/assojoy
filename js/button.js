<script>
        document.getElementById('download-btn').addEventListener('click', function() {
            // Chemin vers le fichier à télécharger
            const href = './PDF/Dossier de Sponsoring JOY 2025.pdf'; // Remplacez par le chemin réel
            const fileName = 'Dossier de Sponsoring JOY 2025.pdf'; // Nom du fichier

            // Création d'un lien pour le téléchargement
            const a = document.createElement('a');
            a.href = fileUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    </script>