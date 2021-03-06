module Components exposing (audioNode, playButton, volumeInput, waveformSeeker)

import AudioModel exposing (..)
import Css as Css exposing (..)
import Events exposing (..)
import Html.Attributes.Extra as HAE
import Html.Styled exposing (..)
import Html.Styled.Attributes as HSA exposing (..)
import Html.Styled.Events exposing (..)
import Json.Decode as JD exposing (..)
import Maybe.Extra exposing (isJust)
import Model exposing (..)
import Mouse exposing (..)
import Msg exposing (..)
import Patch exposing (..)


volumeInput : Html Msg
volumeInput =
    div []
        [ span [] [ text "volume" ]
        , input [ type_ "range", onInput (String.toFloat >> Maybe.withDefault 0.5 >> VolumeChange) ] []
        , button [] [ text "mute" ]
        ]


waveformSeeker : Patch -> Html Msg
waveformSeeker patch =
    let
        seekerPosition =
            patch.audioModel
                |> Maybe.map
                    (\am ->
                        100 / (patch.duration / am.seekerPosition)
                    )

        seeker =
            if seekerPosition |> isJust then
                div
                    [ css
                        [ Css.height (pct 100)
                        , Css.width (px 1)
                        , backgroundColor (hex "ffffff")
                        , Css.position absolute
                        , top (px 0)
                        , left (pct (seekerPosition |> Maybe.withDefault 0))
                        , Css.cursor colResize
                        ]
                    ]
                    []

            else
                div [] []
    in
    div
        [ on "click" (JD.map (Seek patch) mouseDecoder)
        , css
            [ Css.width (pct 100)
            , Css.height (pct 100)
            , Css.position relative
            , Css.float left
            ]
        ]
        [ img [ src patch.waveformSmall, css [ Css.width (pct 100), Css.height (pct 100) ] ] []
        , seeker
        ]


audioNode : Model -> Patch -> Html Msg
audioNode model patch =
    let
        playing =
            case patch.audioModel of
                Just am ->
                    am.playing

                Nothing ->
                    False
    in
    if playing then
        audio
            [ id patch.title
            , src patch.soundUrl
            , HAE.volume model.volume |> HSA.fromUnstyled
            , onEnded (Ended patch) |> HSA.fromUnstyled
            , onTimeUpdate (TimeUpdate patch) |> HSA.fromUnstyled
            ]
            []

    else
        audio
            [ id patch.title
            , src patch.soundUrl
            ]
            []


playButton : Patch -> Html Msg
playButton patch =
    let
        audioModel =
            patch.audioModel |> Maybe.withDefault noPlayingAudioModel

        ( hndlClck, bttnText ) =
            if audioModel.playing then
                ( Pause patch, "pause" )

            else
                ( Play patch, "play" )
    in
    button
        [ onClick hndlClck
        , css [ Css.width (px 60), Css.height (px 60), Css.float left ]
        ]
        [ text bttnText ]
