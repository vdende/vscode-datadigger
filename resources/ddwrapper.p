block-level on error undo, throw.

using Progress.Json.ObjectModel.JsonObject.
using Progress.Json.ObjectModel.ObjectModelParser.

define variable cfgFile as character         no-undo.
define variable parser  as ObjectModelParser no-undo.
define variable config  as JsonObject        no-undo.

cfgFile = session:parameter.
parser  = new ObjectModelParser().
config  = cast(parser:ParseFile(cfgFile), JsonObject).
os-delete value(cfgFile).

propath = substitute("&1,&2"
                    ,config:GetCharacter("dataDiggerPath")
                    ,propath).

run DataDigger.p.

finally:
  quit.
end finally.
