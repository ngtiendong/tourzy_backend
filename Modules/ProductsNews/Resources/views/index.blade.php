@extends('productsnews::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>
        This view is loaded from module: {!! config('productsnews.name') !!}
    </p>
@stop
