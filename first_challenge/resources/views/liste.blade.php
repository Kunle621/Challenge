<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeSpace - Liste</title>
    <link rel="stylesheet" href="{{ asset('bootstrap/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('bootstrap/style.css') }}">
</head>
<body>
    <nav class="nav justify-content-center bg-white shadow-sm py-3">
        <a class="nav-link active" href="{{ route('home') }}">CODESPACE</a>
        <a class="btn btn-primary" href="{{ route('liste') }}">Consulter les codes enregistrés</a>
    </nav>

    <div class="container mt-4">
        <h2>Liste des codes enregistrés</h2>
        <a href="" class="btn btn-primary">Ajouter code</a>
        @if($snippets->count())
        <table class="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Catégorie</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($snippets as $snippet)
                <tr>
                    <td>{{ $snippet->title }}</td>
                    <td>{{ $snippet->description }}</td>
                    <td>{{ $snippet->category }}</td>
                    <td>
                        <a href="" class="btn btn-info btn-sm">Voir</a>

                        <form action="" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger btn-sm" onclick="return confirm('Supprimer ce code ?')">Supprimer</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @else
            <p>Aucun code enregistré pour le moment.</p>
        @endif
    </div>
</body>
</html>
