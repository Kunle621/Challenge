<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeSpace/Ajout de code</title>
    <link rel="stylesheet" href="{{ asset('bootstrap/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('bootstrap/style.css') }}">
</head>
<body>
    <nav class="nav justify-content-center bg-white shadow-sm py-3">
        <a class="nav-link active" href="{{route('home')}}">CODESPACE</a>
        <a class="btn btn-primary" href="{{route('liste')}}">Consulter les codes enregistres</a>
    </nav>

    <div class="container">
        <form method="POST" action="{{route('store')}}">
            @csrf
            <fieldset>
                <legend>CREATION DE CODE</legend>
                    @if (Session::has('message'))
                        <div class="alert alert-success left-icon-big alert-dismissible fade show">
                            <div class="media">
                                <div class="alert-left-icon-big">
                                    <span><i class="mdi mdi-check-circle-outline"></i></span>
                                </div>
                                <div class="media-body">
                                    <h5 class="mt-1 mb-2">{{Session::get('message')}}</h5>
                                </div>
                            </div>
                        </div>
                    @endif
                <div class="mb-3">
                    <label for="title" class="form-label">Titre</label>
                    <input type="text" id="title" name="title" class="form-control" placeholder="Entrer le titre du code" required>
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea name="description" id="description" class="form-control" placeholder="Brève explication de ce que fait le code" rows="4" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="category" class="form-label">Catégorie</label>
                    <select name="category" id="category" class="form-control" required>
                        <option value="php">PHP</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="code" class="form-label">Code</label>
                    <textarea name="code" id="code" class="form-control" placeholder="Entrez ici le code source" rows="10" required></textarea>
                </div>

                <div class="text-end">
                    <button type="submit" class="btn btn-primary">Créer</button>
                </div>
            </fieldset>
        </form>
    </div>
</body>
</html>

