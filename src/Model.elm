module Model exposing (Control(..), Knob, Model, Module, PinConnection, Switch)

import Patch as P
import PinTable
import SynthiSchema as SS


type alias Model =
    { circleFill : String
    , hoverKnob : ( Int, Int )
    , pinModel : PinTable.PinModel
    , synthiSchema : Maybe SS.SynthiSchema
    , patches : Maybe (List P.Patch)
    , error : Maybe String
    , activeAudioPin : Maybe PinConnection
    , activeModules : Maybe ( Module, Module )
    , hoverAudioPin : Maybe PinConnection
    }


type alias PinConnection =
    { out : String
    , into : String
    }


type alias Module =
    { name : String
    , controls : List Control
    }


type Control
    = KnobCtrl Knob
    | SwitchCtrl Switch


type alias Knob =
    { name : String
    , value : Maybe Float
    }


type alias Switch =
    { name : String
    , case_ : Maybe String
    }
