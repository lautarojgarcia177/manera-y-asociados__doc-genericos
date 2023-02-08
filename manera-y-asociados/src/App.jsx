import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'

const primerParrafoInitialValue = `Eduardo C Ordoñez (MP 1-34179) por la participacion acordada en caracter de Actor en estos Autos caratulados: 'CASCON, GREGORIO HECTOR C/ CONSORCIO BALCONES DE SANTA FE - ABREVIADO - CONSIGNACION' Expte N 9295104, ratificando domicilio procesal oportunamente constituido en Calle 9 de Julio 843 - Barrio Alberdi, de esta Ciudad, comparece ante V.S. y respetuosamente dice:`;
function App() {
  let [primerParrafoValue, setPrimerParrafoValue] = useState(
    primerParrafoInitialValue
  );
  function handlePrimerParrafoInputChange(e) {
    setPrimerParrafoValue(e.target.value);
  }
  return (
    <div>
      <Flex width="90%" justifyContent="end">
        <Text style={{ marginTop: "1rem" }} textDecoration="underline" marginLeft="100px" fontSize="4xl">
          AGREGA CARTA PODER - SOLICITA
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Text fontSize="2xl">JUZG 1A INST CIV COM </Text>
        <Select width="80px">
          <option>42A</option>
          <option>42B</option>
          <option>42C</option>
        </Select>
        <Text fontSize="2xl"> NOM - Capital</Text>
      </Flex>
      <Textarea
        height="100px"
        value={primerParrafoValue}
        onChange={handlePrimerParrafoInputChange}
      />
      <OrderedList style={{ marginTop: "1rem" }}>
        <ListItem>
          <Text display="inline" fontSize="2xl">
            AGREGA CARETA PODER - SOLICITA:
          </Text>
          <p>
            Que, por medio de la presente, agrego carta poder otorgada por el
            actor al letrado suscribiente, manifestando bajo fe de juramento que
            la misma es copia fiel de su original y que se encuentra viente al
            dia de la fecha. Asimismo, solicito se otorgue la participacion de
            ley, manteniendo el mismo domicilio procesal oportunamente fijado.
          </p>
        </ListItem>
      </OrderedList>
      <OrderedList style={{ marginTop: "1rem" }}>
        <ListItem>
          <Text display="inline" fontSize="2xl">
            PETITUM:{" "}
          </Text>
          <Text display="inline" fontSize="md">
            Por todo lo expresado Ut Supra es que solicito:
          </Text>
          <OrderedList>
            <ListItem>Agregue carta poder, bajo fe de juramento</ListItem>
            <ListItem>Otorgue la participacion de ley</ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
      <Flex justifyContent="end">
        <Text fontSize="2xl" style={{ marginTop: "1rem" }}>
          PROVEA DE CONFORMIDAD Y SERA JUSTICIA
        </Text>
      </Flex>
      <Button>Imprimir</Button>
    </div>
  );
}

export default App;
